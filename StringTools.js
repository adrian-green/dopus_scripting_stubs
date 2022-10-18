/**
 *This object provides utility functions for string encoding and decoding. It is obtained from the DOpusFactory.StringTools method.
 */
class StringTools {
	/**
	 * <p>Decodes an encoded string or data.</p>
	 *       <p>You can provide either a <a href="Blob.htm"><strong>Blob
	 *       </strong></a>object or a string as the <em>source</em> to decode.
	 *       Depending on the value of the <em>format</em> argument, either a string or
	 *       a {@link Blob}is returned.</p>
	 *       <p>If <em>format</em> is specified as <strong>"base64"</strong> the source
	 *       will be <em>Base64</em>-decoded, and a  {@link Blob}is returned.</p>
	 *       <p>If <em>format</em> is specified as <strong>"quoted"</strong> the source
	 *       will be <em>Quoted-printable</em>-decoded, and a   {@link Blob}is returned.</p>
	 *       <p>If <em>format</em> is specified as <strong>"auto"</strong> or not
	 *       supplied, special handling is invoked to decode a MIME-encoded email
	 *       subject (e.g. one beginning with <strong>=?</strong>), and a string is
	 *       returned. If <strong>"auto"</strong> is specified it will also detect
	 *       UTF-8 or UTF-16 encoded data if it has a BOM at the beginning.</p>
	 *       <p>If <em>format</em> is specified as <strong>utf-8</strong> the source
	 *       will be converted from UTF-8 to a native string. Alternatively, if
	 *       <em>format</em> is <strong>utf-16</strong> or <strong>utf-16-le</strong>,
	 *       the source will be converted from UTF-16 Little Endian to a native string.
	 *       Or, if <em>format</em> is <strong>utf-16-be</strong>, the source will be
	 *       converted from UTF-16 Big Endian to a native string.</p>
	 *       <p>If decoding UTF-8 or UTF-16 (via <strong>"auto"</strong> or
	 *       <strong>"utf-8"</strong>, etc.), any byte-order-mark (BOM) will be skipped
	 *       if one exists at the beginning of the input data.</p>
	 *       <p>Otherwise, <em>format</em> must be set to a valid code-page name (e.g.
	 *       <strong>"gb2312"</strong>, <strong>"utf-8"</strong>), or a Windows
	 *       code-page ID (e.g. <strong>936</strong>, <strong>65001</strong>). The
	 *       source will be decoded using the specified code-page and a string is
	 *       returned.</p>
	 * @param {Blob|string} source_or_source
	 * @param {string} format
	 * @returns {string|Blob}
	 */
	Decode(source_or_source, format){}
	/**
	 * <p>Encodes a string or data.</p>
	 *       <p>You can provide either a  {@link Blob}object or a string as the
	 *       <em>source</em> to decode. Depending on the value of the <em>format</em>
	 *       argument, either a string or a <a href="Blob.htm"><strong>Blob
	 *       </strong></a>is returned.</p>
	 *       <p>If <em>format</em> is specified as <strong>"base64"</strong> the source
	 *       will be <em>Base64</em>-encoded, and a string is returned.</p>
	 *       <p>If <em>format</em> is specified as <strong>"quoted"</strong> the source
	 *       will be <em>Quoted-printable</em>-encoded, and a string is returned.</p>
	 *       <p>If <em>format</em> is specified as <strong>"utf-8 bom"</strong>, the
	 *       output data is encoded as UTF-8 with a byte-order-mark (BOM) at the start.
	 *       Use <strong>"utf-8"</strong> if you want UTF-8 without the BOM.</p>
	 *       <p>If <em>format</em> is specified as <strong>"utf-16 bom"</strong> or
	 *       <strong>"utf-16-le bom"</strong>, the output data is encoded as UTF-16
	 *       Little Endian with a byte-order-mark (BOM) at the start. Use
	 *       <strong>"utf-16"</strong> or <strong>"utf-16-le"</strong> if you do not
	 *       want the BOM.</p>
	 *       <p>If <em>format</em> is specified as <strong>"utf-16-be bom"</strong>,
	 *       the output data is encoded as UTF-16 Big Endian with a byte-order-mark
	 *       (BOM) at the start. Use <strong>"utf-16-be"</strong> if you do not want
	 *       the BOM.</p>
	 *       <p>Otherwise, <em>format</em> must be set to a valid code-page name (e.g.
	 *       <strong>"gb2312"</strong>, <strong>"utf-8" </strong>etc.), or a Windows
	 *       code-page ID (e.g. <strong>936</strong>, <strong>65001</strong>). The
	 *       source will be encoded using the specified code-page and a {@link Blob}is returned.<br></p>
	 * @param {Blob|string} source_or_source
	 * @param {string} format
	 * @returns {string|Blob}
	 */
	Encode(source_or_source, format){}
	/**
	 * <p>Tests the input string to see if it only contains characters that can
	 *       be represented in ASCII.</p>
	 *       <p>If the result is false, the string is not safe to save into a text file
	 *       unless you use a Unicode format such as UTF-8.</p>
	 *       <p>This check is not affected by locales or codepages. Instead, it tests
	 *       whether the string consists of only 7-bit ASCII characters, such that no
	 *       characters will be lost of modified if you save the string to a text file
	 *       and then load it back on any other computer.</p>
	 * @param {string} input
	 * @returns {boolean}
	 */
	IsASCII(input){}
} //end class
