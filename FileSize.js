/**
 *This object is used to represent a size in bytes (mainly because ActiveX scripting doesn't have proper support for 64 bit integers). It is used by the Item and TabStats objects.
 */
class FileSize {
	/**
	 * <p>Returns the number of bytes represented by this
	 *       <strong>FileSize</strong> object as a <em>string</em>.</p>
	 * @returns {string}
	 */

	_default_value
	/**
	 * <p>Returns the number of bytes as a <em>currency</em> value. This is a 64
	 *       bit data type but it is stored as a fractional value, so you must multiply
	 *       the returned value by 10000 to obtain the actual byte size.</p>
	 * @returns {currency}
	 */

	cy;
	/**
	 * <p>Returns the number of bytes as an automatically formatted string (e.g.
	 *       if the <strong>FileSize</strong> value is 1024, the string <em>1 KB</em>
	 *       would be returned).</p>
	 * @returns {string}
	 */

	fmt;
	/**
	 * <p>Returns the highest (most significant) 32 bits of the file size. Not
	 *       all scripting languages support this data type (e.g. VBScript does
	 *       not).</p>
	 * @returns {float}
	 */

	high;
	/**
	 * <p>Returns the highest 32 bits of the file size as a hexadecimal
	 *       string.</p>
	 * @returns {string}
	 */

	highhex;
	/**
	 * <p>Returns the lowest (least significant) 32 bits of the file
	 *   size.</p>
	 * @returns {float}
	 */

	low;
	/**
	 * <p>Returns the lowest 32 bits of the file size as a hexadecimal
	 *       string.&nbsp;</p>
	 * @returns {string}
	 */

	lowhex;
	/**
	 * <p>Returns the number of bytes as a decimal value. This is a 64 bit data
	 *       type but not all scripting languages support it (e.g. VBScript does
	 *       not).</p>
	 * @returns {float}
	 */

	val;
	/**
	 * <p>Returns the number of bytes as a hexadecimal
	 * string.</p>
	 * @returns {string}
	 */

	valhex;

	/**
	 * <p>Adds the supplied value to the value of this <strong>FileSize</strong>
	 *       object.&nbsp;You can pass a <em>string</em>, <em>int
	 *       </em>or&nbsp;<em>currency</em> type, or another <strong>FileSize</strong>
	 *       object.</p>
	 * @param {any} value
	 *
	 */
	Add(value) {
	}

	/**
	 * <p>Clones this <strong>FileSize</strong> object and returns a new one set
	 *       to the same value.</p>
	 * @returns {FileSize}
	 */
	Clone() {
	}

	/**
	 * <p>Compares the supplied value with the value of this
	 *       <strong>FileSize</strong> object. The return value will be
	 *       <strong>0</strong> (equal), <strong>1</strong> (greater) or
	 *       <strong>-1</strong> (less).</p>
	 * @param {any} value
	 * @returns {int}
	 */
	Compare(value) {
	}

	/**
	 * <p>Divides the value of this <strong>FileSize</strong> object with the
	 *       supplied value. You can pass a <em>string</em>, <em>int
	 *       </em>or&nbsp;<em>currency</em> type, or another <strong>FileSize</strong>
	 *       object.</p>
	 * @param {variant} value
	 *
	 */
	Div(value) {
	}

	/**
	 * <p>Multiplies the value of this <strong>FileSize</strong> object with the
	 *       supplied value. You can pass a <em>string</em>, <em>int
	 *       </em>or&nbsp;<em>currency</em> type, or another <strong>FileSize</strong>
	 *       object.</p>
	 * @param {any} value
	 */
	Mult(value) {
	}

	/**
	 * <p>Sets the <strong>FileSize</strong> to the supplied value. You can pass
	 *       a <em>string</em>, <em>int</em>,<em>
	 *       decimal&nbsp;</em>or&nbsp;<em>currency</em> type, or another
	 *       <strong>FileSize</strong> object. You can also pass a {@link Blob}consisting of exactly 1, 2, 4 or
	 *       8 bytes, in which case the data contained in the {@link Blob}will be used to form the number.
	 *       You can use a hexadecimal string by pre-pending <strong>$</strong> or
	 *       <strong>0x</strong>.</p>
	 * @param {variant} value
	 */
	Set(value) {
	}

	/**
	 * <p>Subtracts the supplied value&nbsp;from the value of this
	 *       <strong>FileSize</strong> object.&nbsp;You can pass a <em>string</em>,
	 *       <em>int </em>or&nbsp;<em>currency</em> type, or another
	 *       <strong>FileSize</strong> object. Note that the <strong>FileSize</strong>
	 *       object is <em>unsigned</em> and so the value cannot go below
	 *   zero.</p>

	 * @param {variant} value
	 *
	 */
	Sub(value) {
	}

	/**
	 * <p>Returns a {@link Blob}containing the
	 *       bytes that make up the current value. By default 8 bytes will be copied to
	 *       the {@link Blob}(the full 64 bit number)
	 *       but you can pass an alternative number of bytes (1, 2 or 4) as a parameter
	 *       to truncate the value.</p>
	 * @param {int} number
	 * @returns {Blob}
	 */
	ToBlob(number) {
	}
} //end class
