pack-chr: pack-fire
	sed -i '/"browser_specific_settings": {/,/},/d' manifest.json

pack-fire: clean
	sed -i 's/\("version": "[^"]*\)-SNAPSHOT"/\1"/' manifest.json

clean:
	rm -rf screenshots .deepsource.toml .gitignore README.md .github Makefile

