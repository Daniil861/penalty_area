class LoadingBar {
	constructor(scene) {
		this.scene = scene;
		this.style = {
			boxColor: 0xD3D3D3,
			barColor: 0xFFF8DC,
			x: config.width / 2 - 450,
			y: config.height / 2 + 250,
			width: 900,
			height: 25
		}
		console.log('loading bar');

		this.progressBox = this.scene.add.graphics();
		this.progressBar = this.scene.add.graphics();

		this.showProgressBox();

		this.setEvents();
	}
	setEvents() {
		this.scene.load.on('progress', this.showProgressBar, this); // событие, которое отслеживает прогресс выполнения загрузки. В функцию передает значение от 0 до 1
		this.scene.load.on('fileprogress', this.onFileProgress, this); // событие, которое отслеживает какой файл загружается в данный момент
		this.scene.load.on('complete', this.onLoadComplete, this); // событие, которое отслеживает завершение загрузки
	}

	showProgressBox() {
		// цепочка вызовов, то же самое что и прописывание в каждой строчке this.progressBox вместе со свойством
		this.progressBox
			.fillStyle(this.style.boxColor) // устанавливаем цвет заливки блока
			.fillRect(this.style.x, this.style.y, this.style.width, this.style.height);
	}

	showProgressBar(value) {
		this.progressBar
			.clear()
			.fillStyle(this.style.barColor) // устанавливаем цвет заливки блока
			.fillRect(this.style.x, this.style.y, this.style.width * value, this.style.height);
	}

	onFileProgress(file) {
		// показывает какой файл загружается в данный момент
	}

	onLoadComplete() {
		// метод, который вызывается когда загрузка завершена
		this.progressBar.destroy();
		this.progressBox.destroy();
	}

}