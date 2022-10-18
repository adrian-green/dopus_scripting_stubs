/**
 *The Rect object represents a rectangle.
 */
class Rect {
	/**
	 * <p>Returns the left edge of the rectangle.</p>
	 * @returns {int}
	 */

	left;
	/**
	 * <p>Returns the top edge of the rectangle.</p>
	 * @returns {int}
	 */

	top;
	/**
	 * <p>Returns the right edge of the rectangle.</p>
	 *       <p>Note that this value is actually 1 outside the right edge. A rectangle
	 *       includes everything from and including the left edge up to but excluding
	 *       the right edge.</p>
	 *       <p>A rectangle at position 0,7 with 0 width will have left=0 and right=0.
	 *       The same but with a width of 1 will have left=0 and right=1, and so
	 *     on.</p>
	 * @returns {int}
	 */

	right;
	/**
	 * <p>Returns the bottom edge of the rectangle.</p>
	 *       <p>Note that this value is actually 1 outside the right edge. A rectangle
	 *       includes everything from and including the top edge up to but excluding
	 *       the bottom edge.</p>
	 *       <p>A rectangle at position 0,7 with 0 height will have top=7 and bottom=7.
	 *       The same but with a height of 10 will have top=7 and bottom=17, and so
	 *       on.</p>
	 * @returns {int}
	 */

	bottom;
	/**
	 * <p>Returns the width of the rectangle. Equal to
	 *       <strong>right-left</strong>.</p>
	 * @returns {int}
	 */

	width;
	/**
	 * <p>Returns the height of the rectangle. Equal to
	 *       <strong>bottom-top</strong>.</p>
	 * @returns {int}
	 */

	height;
	/**
	 * <p>Returns a string describing the rectangle's position and size, as a
	 *       convenience when debugging scripts. The format is "(L,T - R,B; WxH)" i.e.
	 *       Left, Top, Right, Bottom, Width, and Height.</p>
	 * @returns {string}
	 */
	ToString(){}
} //end class
