/**
 *This object is provided to the OnListerResize event, which is called whenever a Lister window is resized.
 */
class ListerResizeData {
	/**
	 * <p>Returns a <em>string</em> indicating the resize action that occurred.
	 *       This will be one of the following strings: <em>resize</em>,
	 *       <em>minimize</em>, <em>maximize</em>, <em>restore.</em></p>
	 * @returns {string}
	 */

	action;
	/**
	 * <p>Returns the new width of the Lister in pixels.</p>
	 * @returns {int}
	 */

	width;
	/**
	 * <p>Returns the new height of the Lister in pixels.</p>
	 * @returns {int}
	 */

	height;
	/**
	 * <p>Returns a  <!--?xml:namespace prefix = "c1" /-->{@link Lister}&nbsp;object representing the
	 *       Lister that was resized.</p>
	 * @returns {Lister}
	 */

	lister;
} //end class
