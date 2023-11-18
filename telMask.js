document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.getElementById("phone"); // ищем наш единственный input
  const maskOptions = {
    // создаем объект параметров
    mask: "+{38} (000)-000-0000", // задаем единственный параметр mask
  };
  IMask(inputElement, maskOptions); // запускаем плагин с переданными параметрами
});
