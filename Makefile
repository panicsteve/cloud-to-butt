all:
	DISPLAY=:0 sudo google-chrome --pack-extension=Source --pack-extension-key=CloudToButt.pem --user-data-dir=/tmp/foooo
	sudo chown hank:hank Source.crx
	mv Source.crx CloudToButt.crx
