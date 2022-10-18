/**
 *This object provides access to an audio file's embedded cover art. It is obtained from the AudioMeta.coverart property.
 */
class AudioCoverArt {
	/**
	 * <p>Returns a string indicating&nbsp;the intended use for this cover art.
	 *       Possible values are <em>artist</em>, <em>back</em>, <em>band</em>,
	 *       <em>bandlogo</em>, <em>colorfulfish</em> (this is unfortunately part of
	 *       the ID3 specification), <em>composer</em>, <em>conductor</em>,
	 *       <em>front</em>, <em>icon</em>, <em>illustration</em>, <em>leadartist</em>,
	 *       <em>leaflet</em>, <em>location</em>, <em>lyricist</em>, <em>media</em>,
	 *       <em>other</em>, <em>otherfileicon</em>, <em>performance</em>,
	 *       <em>publisherlogo</em>, <em>recording</em>, <em>vidcap.</em></p>
	 * @returns {string}
	 */

	_default_value;
	/**
	 * <p>Returns a  {@link Blob}&nbsp;object representing the
	 *       actual image data.</p>
	 * @returns {Blob}
	 */

	data;
	/**
	 * <p>Returns the bit depth of this image.</p>
	 * @returns {int}
	 */

	depth;
	/**
	 * <p>Returns the description of this image (if any).</p>
	 * @returns {string}
	 */

	desc;
	/**
	 * <p>Returns the default file extension for this image, if it can be
	 *       determined.</p>
	 * @returns {string}
	 */

	ext;
	/**
	 * <p>Returns the height of this image, in pixels.</p>
	 * @returns {int}
	 */

	height;
	/**
	 * <p>Returns the image's MIME type, if specified in the file.</p>
	 * @returns {string}
	 */

	mime;
	/**
	 * <p>Returns a  {@link FileSize}&nbsp;object representing
	 *       the size of the image data.</p>
	 * @returns {FileSize}
	 */

	size;
	/**
	 * <p>Returns a "pretty" form of the intended use string (i.e. the
	 *       <em>default value</em>), translated to the current Opus user interface
	 *       language.</p>
	 * @returns {string}
	 */

	type;
	/**
	 * <p>Returns the width of this image, in pixels.</p>
	 * @returns {int}
	 */

	width;
} //end class
