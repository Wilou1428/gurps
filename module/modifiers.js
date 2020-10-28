export class ModifierBucket extends Application {
	
  getData(options) {
    const data = super.getData(options);
		data.gmod = game.GURPS.ModifierBucket;
    return data;
	}
	activateListeners(html) {
	  super.activateListeners(html);
//		html.find(".pdflink").click(this._onClickPdf.bind(this));
	
		html.find("#gmodleft").click(this._onClickLeft.bind(this));
		html.find("#gmodright").click(this._onClickRight.bind(this));
	}
	
	async _onClickLeft(event) {
		event.preventDefault();
		let element = event.currentTarget;
		this.setCurrentModifier(this.getCurrentModifier() -1);	
		console.log(this.getCurrentModifier());
	}
	
	async _onClickRight(event) {
	  event.preventDefault();
		let element = event.currentTarget;
		if (element.id != "gmodright") return;
		this.setCurrentModifier(this.getCurrentModifier() +1);	
		console.log(this.getCurrentModifier());
	}

	
	getCurrentModifier() {
		if (!game.GURPS.ModifierBucket.currentmodifier) game.GURPS.ModifierBucket.currentmodifier = 0;
		return game.GURPS.ModifierBucket.currentmodifier;
	}
	
	setCurrentModifier(m) {
		return game.GURPS.ModifierBucket.currentmodifier = m;;
	}


}