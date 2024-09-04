const rojoInput = document.getElementById('rojo');
const rojoNumInput = document.getElementById('rojo-num');
const verdeInput = document.getElementById('verde');
const verdeNumInput = document.getElementById('verde-num');
const azulInput = document.getElementById('azul');
const azulNumInput = document.getElementById('azul-num');
const colorPicker = document.getElementById('color-picker');
const colorPreview = document.getElementById('color-preview');
const hexCode = document.getElementById('hex-code');

function updateColor() {
    const rojo = parseInt(rojoNumInput.value);
    const verde = parseInt(verdeNumInput.value);
    const azul = parseInt(azulNumInput.value);
    const rgb = `rgb(${rojo}, ${verde}, ${azul})`;
    const hex = rgbToHex(rojo, verde, azul);
    colorPreview.style.backgroundColor = rgb;
    hexCode.textContent = `Código hexadecimal: #${hex}`;
    rojoInput.value = rojo;
    verdeInput.value = verde;
    azulInput.value = azul;
    colorPicker.value = `#${hex}`;
}

function rgbToHex(r, g, b) {
    return ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

function colorToRgb(hex) {
    hex = hex.replace('#', '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
}

rojoInput.addEventListener('input', () => {
    rojoNumInput.value = rojoInput.value;
    updateColor();
});

rojoNumInput.addEventListener('input', () => {
    rojoInput.value = rojoNumInput.value;
    updateColor();
});

verdeInput.addEventListener('input', () => {
    verdeNumInput.value = verdeInput.value;
    updateColor();
});

verdeNumInput.addEventListener('input', () => {
    verdeInput.value = verdeNumInput.value;
    updateColor();
});

azulInput.addEventListener('input', () => {
    azulNumInput.value = azulInput.value;
    updateColor();
});

azulNumInput.addEventListener('input', () => {
    azulInput.value = azulNumInput.value;
    updateColor();
});

colorPicker.addEventListener('input', () => {
    const color = colorPicker.value;
    const rgb = colorToRgb(color);
    rojoNumInput.value = rgb.r;
    verdeNumInput.value = rgb.g;
    azulNumInput.value = rgb.b;
    updateColor();
});
