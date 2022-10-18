/**
 *This object represents a toolbar. It is obtained with the DOpus.toolbars and Lister.toolbars properties.
 */
class Toolbar {
	/**
	 * <p>Returns the name of the toolbar.</p>
	 * @returns {string}
	 */

	_default_value
	/**
	 * <p>Returns <strong>True</strong> if this is a default (factory-provided)
	 *       toolbar, or <strong>False</strong> if it was user-created.</p>
	 *       <p>(Old scripts may use "default" instead of "deftoolbar"; this is
	 *       deprecated because it does not work in JScript where "default" is a
	 *       reserved keyword.)</p>
	 * @returns {boolean}
	 */

	deftoolbar;
	/**
	 * <p>Returns a collection of&nbsp; {@link Lister}&nbsp;objects representing
	 *       any and all Listers this toolbar is currently open in.</p>
	 * @returns {Lister[]}
	 */

	listers;
	/**
	 * <p>Returns a collection of  {@link Dock}&nbsp;objects representing any
	 *       currently floating instances of this toolbar.</p>
	 * @returns {Dock[]}
	 */

	docks;
	/**
	 * <p>Returns a <em>string</em> indicating the&nbsp;group (position) of a
	 *       particular instance of this toolbar. The returned string will be one of
	 *       <em>top</em>, <em>bottom</em>, <em>left</em>, <em>right</em>,
	 *       <em>center</em>, <em>fdright</em>, <em>fdbottom</em>,
	 *   <em>tree</em>.</p>
	 * @returns {string}
	 */

	group;
	/**
	 * <p>Returns the line number within the toolbar's group that it resides on.
	 *       For example, the first toolbar at the top of the Lister would have a line
	 *       of 0.</p>
	 * @returns {int}
	 */

	line;
	/**
	 * <p>Returns the pixel position from the left/top of the toolbar's line. If
	 *       there are two or more toolbars with the same <strong>line</strong> number,
	 *       the <strong>pos</strong> value determines the order they appear
	 *   in.</p>
	 * @returns {int}
	 */

	pos;
} //end class
