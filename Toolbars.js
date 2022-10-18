/**
 *The Toolbars object lets you enumerate all the defined toolbars in your Directory Opus configuration (whether currently turned on or not).
 */
class Toolbars {
	/**
	 * <p>Returns a collection of <!--?xml:namespace prefix = "c1" /-->{@link Toolbar}&nbsp;objects that you can
	 *       enumerate.</p>
	 * @returns {Toolbar[]}
	 */

	_default_value
	/**
	 * <p>Returns the name(s) of the currently selected File Display
	 *       Toolbar(s).</p>
	 *       <p>If the FDB toolbar is disabled, returns the string
	 *       <strong>!static</strong> to indicate a static header.</p>
	 *       <p>If there is only one FDB toolbar configured (the usual case), it is
	 *       returned as a simple string.</p>
	 *       <p>If more than one FDB toolbar is configured, a {@link Vector} of strings is returned.</p>
	 *       <p>You can use <strong>DOpus.toolbars.fdb(0)</strong> in both JScript and
	 *       VBScript if you just want the name of the first toolbar without worrying
	 *       about whether the number of other toolbars (if any). Otherwise, use
	 *       <strong>TypeName(...)</strong> in VBScript and <strong>typeof</strong> in
	 *       JScript to determine the return type.</p>
	 * @returns {string}
	 */

	fdb;
	/**
	 * <p>Returns the name of the currently selected Viewer
	 *   Toolbar.</p>
	 * @returns {string}
	 */

	viewer;
} //end class
