import {
  WebGLRenderer, Scene, PerspectiveCamera, Group,
  BufferGeometry, BufferAttribute, Points, PointsMaterial, Mesh,
  IcosahedronGeometry, MeshBasicMaterial, TorusGeometry,
} from 'three';

let frame = 0;

export function initHeroScene() {
  const mount = document.querySelector('.hero-3d');
  if (!mount) return;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ((!fine && reduce) || innerWidth < 768) return;

  const isWide = () => innerWidth >= 768;

  const scene = new Scene();
  const camera = new PerspectiveCamera(55, 1, .1, 100);
  camera.position.z = 7.5;

  const renderer = new WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.domElement.style.pointerEvents = 'none';
  renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.inset = '0';
  mount.appendChild(renderer.domElement);

  const group = new Group();
  scene.add(group);

  const particleCount = 1400;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const r = 2.6 + Math.random() * 3.4;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  const geo = new BufferGeometry();
  geo.setAttribute('position', new BufferAttribute(positions, 3));
  const mat = new PointsMaterial({
    color: 0x2456f5,
    size: .045,
    transparent: true,
    opacity: .5,
    sizeAttenuation: true,
  });
  group.add(new Points(geo, mat));

  const shell = new Mesh(
    new IcosahedronGeometry(3.15, 1),
    new MeshBasicMaterial({ color: 0x2456f5, wireframe: true, transparent: true, opacity: .07 }),
  );
  group.add(shell);

  const ring = new Mesh(
    new TorusGeometry(3.9, .008, 8, 128),
    new MeshBasicMaterial({ color: 0x2456f5, transparent: true, opacity: .25 }),
  );
  ring.rotation.x = Math.PI / 2;
  group.add(ring);

  const resize = () => {
    if (!isWide()) {
      mount.style.display = 'none';
      return;
    }
    mount.style.display = '';
    const w = mount.clientWidth || innerWidth;
    const h = mount.clientHeight || innerHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener('resize', resize, { passive: true });

  let visible = false;
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
  io.observe(mount);

  const tick = () => {
    if (visible) {
      if (!reduce) {
        group.rotation.y += .0018;
        group.rotation.x += .0006;
      }
      renderer.render(scene, camera);
    }
    frame = requestAnimationFrame(tick);
  };
  if (reduce) {
    renderer.render(scene, camera);
  } else {
    tick();
  }

  return () => {
    cancelAnimationFrame(frame);
    io.disconnect();
    window.removeEventListener('resize', resize);
    group.traverse(o => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) o.material.dispose();
    });
    renderer.dispose();
    mount.innerHTML = '';
  };
}
