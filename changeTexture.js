const modelViewerTexture = document.querySelector("model-viewer#duck");
const textureName = document.querySelector("#texture-name");
const imageName = document.querySelector("#image-name");

modelViewerTexture.addEventListener("load", () => {
  const material = modelViewerTexture.model.materials[0];

  const createAndApplyTexture = async (channel, event) => {
    if (event.target.value == "None") {
      // Clears the texture.
      material[channel].setTexture(null);
      // Display the names values
      textureName.innerText = "None";
      imageName.innerText = "None";
    } else if (event.target.value) {
      // Creates a new texture.
      const texture = await modelViewerTexture.createTexture(
        event.target.value
      );
      // Set the texture name
      texture.name = event.target.options[event.target.selectedIndex].text
        .replace(/ /g, "_")
        .toLowerCase();
      // Applies the new texture to the specified channel.
      material[channel].setTexture(texture);
      // Display the names values
      textureName.innerText = texture.name;
      imageName.innerText = texture.source.name;
    }
  };

  document.querySelector("#normals2").addEventListener("input", (event) => {
    createAndApplyTexture("normalTexture", event);
  });
});
