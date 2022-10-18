/**
 *This object is provided to the script-specified method used to add new internal commands to Opus.
 */
class ScriptCommandData {
	/**
	 * <p>This returns the original command line that invoked the command. If any
	 *       arguments were provided&nbsp;on the command line they are available in
	 *       parsed form from the <strong>func.args </strong>property.</p>
	 * @returns {string}
	 */

	cmdline;
	/**
	 * <p>Returns a  {@link Func}&nbsp;object relating to this
	 *       function. This provides access to information about the function's
	 *       environment (source and destination tabs, etc) as well as any variables
	 *       and parsed command line arguments.</p>
	 * @returns {Func}
	 */

	func;
} //end class
