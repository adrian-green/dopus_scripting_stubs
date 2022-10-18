/**
 *This object provides a simple interface for dealing with binary data. It is obtained from the DOpusFactory.Blob method and also returned by the AudioCoverArt.data property.
 */
class Blob {
	/**
	 * <p>Returns a  {@link FileSize}&nbsp;object representing
	 *       the size of this <strong>Blob </strong>in bytes.</p>
	 * @returns {FileSize}
	 */

	size;

	/**
	 * <p>Compares the contents of this <strong>Blob</strong> against another
	 *       <strong>Blob</strong> (or array). By default the entire contents of the
	 *       two blobs are compared. The optional parameters that let you configure the
	 *       operation are:<br><br>to - specifies the byte offset within this
	 *       <strong>Blob</strong> to compare against. Defaults to 0.<br>from -
	 *       specifies the byte offset within the source <strong>Blob</strong> to
	 *       compare with. Defaults to 0.<br>size - specifies the number of bytes to
	 *       compare. Defaults to the full size of the source
	 *       <strong>Blob</strong>.<br><br>The return value is <strong>0</strong> if
	 *       the two blobs are the same. A value of <strong>-1</strong> indicates this
	 *       blob is less than the other blob, and <strong>1</strong> indicates this
	 *       blob is greater than the other blob.</p>
	 * @param {Blob} source
	 * @param {int} to
	 * @param {int} from
	 * @param {int} size
	 * @returns {int}
	 */
	Compare(source, to, from, size) {
	}

	/**
	 * <p>Copies data from the source <strong>Blob</strong> (or array) into this
	 *       <strong>Blob</strong>. By default the entire contents of the source
	 *       <strong>Blob</strong> will be copied over the top of this one. The
	 *       optional parameters that let you configure the operation are:<br><br>to -
	 *       specifies the byte offset within this <strong>Blob</strong> to copy to.
	 *       Defaults to 0.<br>from - specifies the byte offset within the source
	 *       <strong>Blob</strong> to copy from. Defaults to 0.<br>size - specifies the
	 *       number of bytes to copy. Defaults to the full size of the source
	 *       <strong>Blob</strong>.</p>
	 *       <p>&nbsp;</p>
	 *       <p>As well as copying from another <strong>Blob</strong>, you can use this
	 *       method to initialise a <strong>Blob</strong> from a string. By default the
	 *       <strong>Blob</strong> will be set to the Unicode form of the string; if
	 *       you pass <strong>"utf8"</strong> as the second parameter it will
	 *       initialise the <strong>Blob</strong> with the UTF8-encoded form of the
	 *       string.<br><br>If this <strong>Blob</strong> is not currently large enough
	 *       to contain the copied data it will be resized automatically.<br></p>
	 * @param {Blob} source
	 * @param {int} to
	 * @param {int} from
	 * @param {int} size
	 * TODO: how to overload params?
	 */
	CopyFrom(source, to, from, size) {
	}

	/**
	 * @param {string} text
	 * @param {string} stringtype utf8
	 */
	CopyFrom(text, stringtype) {
	}

	/**
	 * <p>Searches the&nbsp;contents of this&nbsp;<strong>Blob</strong> for the
	 *       data contained in another <strong>Blob</strong> (or array). By default the
	 *       entire contents of this <strong>Blob</strong> are searched. The optional
	 *       <strong>from</strong> parameter lets you specify the starting position for
	 *       the search, and the optional <strong>size</strong> parameter lets you
	 *       specify the length of data in this Blob to search through.<br>&nbsp;</p>
	 *       <p>The return value is -1 if the search data were not found, otherwise the
	 *       offset from the start of the <strong>Blob</strong> data is
	 *   returned.</p>
	 * @param {Blob} search
	 * @param {int} from
	 * @param {int} size
	 * @returns {FileSize}
	 */
	Find(search, from, size) {
	}

	/**
	 * <p>Frees the memory associated with this <strong>Blob</strong> and resets
	 *       its size to 0.</p>
	 *
	 */
	Free() {
	}

	/**
	 * <p>Initialises the contents of the <strong>Blob</strong> (every byte
	 *       within the blob will be set to 0). Equivalent to
	 * <em>Set(0)</em>.</p>
	 *
	 */
	Init() {
	}

	/**
	 * <p>Resizes the <strong>Blob</strong> to the specified number of
	 *     bytes.</p>
	 * @param {int} size
	 *
	 */
	Resize(size) {
	}

	/**
	 * <p>Reverses the contents of the <strong>Blob</strong>.</p>
	 *
	 */
	Reverse() {
	}

	/**
	 * <p>Sets the contents of the <strong>Blob</strong> to the specified byte
	 *       value (every byte within the blob will be set to that value). By default
	 *       the whole <strong>Blob</strong> will be affected. The option <em>to</em>
	 *       parameter lets you specify a byte offset to start at, and the optional
	 *       <em>size</em> parameter lets you control the number of bytes
	 *     affected.</p>
	 * @param {byte} value
	 * @param {int} to
	 * @param {int} size
	 *
	 */
	Set(value, to, size) {
	}

	/**
	 * <p>Converts the contents of this <strong>Blob</strong> to a
	 *       <em>SAFEARRAY</em> of type <em>VT_UI1</em>. By default the entire contents
	 *       of the <strong>Blob</strong> will be copied to the array. The optional
	 *       parameters that let you configure the operation are:<br>&nbsp;</p>
	 *       <p>from - specifies the byte offset within the source
	 *       <strong>Blob</strong> to copy from. Defaults to 0.<br>size - specifies the
	 *       number of bytes to copy. Defaults to the full size of the source
	 *       <strong>Blob</strong>.</p>
	 * @param {int} from
	 * @param {int} size
	 * @returns {SAFEARRAY ofVT_UI1}
	 */
	ToArray(from, size) {
	}

	/**
	 * <p>Converts the contents of this <strong>Blob</strong> to a
	 *       <em>SAFEARRAY</em> of type <em>VT_VARIANT</em>. Each variant in the array
	 *       contains a <em>VT_UI1</em>. By default the entire contents of the
	 *       <strong>Blob</strong> will be copied to the array. The optional parameters
	 *       that let you configure the operation are:<br><br></p>
	 *       <p>from - specifies the byte offset within the source
	 *       <strong>Blob</strong> to copy from. Defaults to 0.<br>size - specifies the
	 *       number of bytes to copy. Defaults to the full size of the source
	 *       <strong>Blob</strong>.</p>
	 * @param {int} from
	 * @param {int} size
	 * @returns {SAFEARRAY ofVT_VARIANT}
	 */
	ToVBArray(from, size) {
	}
} //end class
