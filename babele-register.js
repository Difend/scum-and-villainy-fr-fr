Hooks.once('init', () => {
	if(typeof Babele !== 'undefined') {
		Babele.get().register({
			module: 'scum-and-villainy-fr-fr',
			lang: 'fr-FR',
			dir: 'compendium'
		});
  } // END if(typeof Babele
});
