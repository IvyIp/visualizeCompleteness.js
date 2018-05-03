class VCompleteness {
    constructor(selector, options) {
        this.elements = document.querySelectorAll(selector);
        this.level = 0;
        this.method = options.method;
        this.methods = {
            "blur": {
                min: 20,
                max: 0
            },
            "width": {
                min: 0,
                max: 100
            },
            "height": {
                min: 0,
                max: 100
            },
            "area": {
                min: 0,
                max: 100
            },
            "brightness": {
                min: 150,
                max: 100
            },
            "darkness": {
                min: 50,
                max: 100
            },
			"rotate": {
				min: 0,
				max: 359
			},
			"horizontal-move": {
				min: 0,
				max: 100
			},
			"vertical-move": {
				min: 0,
				max: 100
			},
			"grayscale": {
				min: 100,
				max: 0
			},
			"opacity": {
				min: 0,
				max: 100
			}
        }
        this.init();
		this.update(this.level);
    }
	
	get completeness(){
		return this.level;
	}

    init(){
        if ((typeof(this.method) === 'undefined') || (typeof(this.methods[this.method]) === 'undefined')){
            throw new Error('method not included')
        }
		for (let i = 0; i < this.elements.length; i++){
            let element = this.elements[i];
			element.removeAttribute("style");
		}
    }

    update(value){
		value = (value < 0 ? 0 : value);
		value = (value > 100 ? 100 :value);
        let step = (this.methods[this.method].max - this.methods[this.method].min) / 100;
        let styleValue = step * value + this.methods[this.method].min;

        for (let i = 0; i < this.elements.length; i++){
            let element = this.elements[i];
            element.style.transition = '0.2s';

            switch(this.method) {
                case "blur":
					element.style.filter = `${this.method}(${styleValue}px)`;
                    break;
				case "brightness":
				case "grayscale":
				case "opacity":
                    element.style.filter = `${this.method}(${styleValue}%)`;
                    break;
                case "width":
                    element.style.width = `${styleValue}%`;
                    break;
                case "height":
                    element.style.height = `${styleValue}%`;
                    break;
                case "area":
                    element.style.width = `${styleValue}%`;
                    element.style.height = `${styleValue}%`;
                    break;
                case "darkness":
                    element.style.filter = `brightness(${styleValue}%)`;
                    break;
				case "rotate":
					element.style.transform = `rotate(${styleValue}deg)`;
					break;
				case "horizontal-move":
					let width = element.offsetWidth;
					element.style.left = `calc(${styleValue}% - ${(styleValue / 100) * width}px)`;
					break;
				case "vertical-move":
					let height = element.offsetHeight;
					element.style.top = `calc(${styleValue}% - ${(styleValue / 100) * height}px)`;
					break;
            }

        }
		this.level = value;
    }
}