pack-chr: pack-fire
	@sed -i '/"browser_specific_settings": {/,/},/d' manifest.json

pack-fire:
	rm -rf screenshots .deepsource.toml .gitignore README.md .github Makefile

