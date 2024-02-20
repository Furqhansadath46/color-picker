document.querySelectorAll('input[type=color]').

forEach(function (picker){

    let targetLabel = document.querySelector('label[for="' + picker.id + '"]'),
        // colorArea = document.createElement("span"),
        range = document.getElementById("fontSizeRange"),
        hex = document.getElementById('hex'),
        content = document.getElementById("content")

        function updateFontSize(){
            const fontSize = range.value + "px"
            content.style.fontSize = fontSize
        }

        function updateHexCode() {
            hex.value = picker.value;
            content.style.color = picker.value;
        }

        range.addEventListener("input", updateFontSize)
        
        // picker.addEventListener('change', function(){
        //     hex.innerHTML = picker.value;
        //     targetLabel.appendChild(colorArea);
        //     content.style.color = picker.value
            
        // });

        picker.addEventListener('input', updateHexCode);
});