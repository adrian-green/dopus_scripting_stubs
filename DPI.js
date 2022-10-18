/**
 *The DPI object is a helper object that provides a number of methods and properties relating to the system DPI setting. It's returned via the DOpus.DPI property.
 */
class DPI {
	/**
	 * <p>Returns the system DPI setting as a “dpi value” (e.g. 96,
	 *   192).</p>
	 * @returns {int}
	 */

	dpi;
	/**
	 * <p>Returns the DPI settings as a “scale factor” (e.g. 100, 125,
	 *     200).</p>
	 * @returns {int}
	 */

	factor;
	/**
	 * <p>Divides the provided size by the system DPI; e.g. if the system DPI was
	 *       set to 150%, <b>DPI.Divide(60)</b> would return <b>40.</b></p>
	 * @param {int} value
	 * @returns {int}
	 */
	Divide(value){}
	/**
	 * <p>Scales the provided size by the system DPI; e.g. if the system DPI was
	 *       set to 200%, <b>DPI.Scale(75)</b> would return
	 *   <b>150</b>.</p>
	 * @param {int} value
	 * @returns {int}
	 */
	Scale(value){}
} //end class
