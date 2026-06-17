import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

const setCharacter = (
  _renderer: THREE.WebGLRenderer,
  _scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const blobUrl = "/models/character.glb";

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            try {
              character = gltf.scene;
              console.log("Character loaded successfully:", character);
              
              // List some object names to help debugging
              const names: string[] = [];
              character.traverse((child: any) => {
                if (child.name) names.push(child.name);
                if (child.isMesh) {
                  const mesh = child as THREE.Mesh;
                  child.castShadow = true;
                  child.receiveShadow = true;
                  mesh.frustumCulled = true;
                }
              });
              console.log("Object names in character:", names.slice(0, 20), "...");

              setCharTimeline(character, camera);
              setAllTimeline();

              let footR = character.getObjectByName("footR");
              let footL = character.getObjectByName("footL");

              if (!footR || !footL) {
                character.traverse((child) => {
                  const name = child.name.toLowerCase();
                  if (name.includes("foot")) {
                    if (name.includes("r") && !footR) footR = child;
                    if (name.includes("l") && !footL) footL = child;
                  }
                });
              }

              if (footR) footR.position.y = 3.36;
              else console.warn("footR not found in character model");

              if (footL) footL.position.y = 3.36;
              else console.warn("footL not found in character model");

              resolve(gltf);
              dracoLoader.dispose();
            } catch (err) {
              console.error("Error in character loader callback:", err);
              reject(err);
            }
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
