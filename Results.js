/**
 *This object represents the results of a command (the error code in the case of failure, plus any new tabs or Listers created by the command). It is obtained from the Command.results property.
 */
class Results {
	/**
	 * <p>Indicates whether or not the command ran successfully. Zero indicates
	 *       the command could not be run or was aborted; any other number indicates
	 *       the command was run for at least some files. (Note that this is not the
	 *       "exit code" for external commands. For external commands it only indicates
	 *       whether or not Opus launched the command. If you need the exit code of an
	 *       external command, use the WScript.Shell Run or Exec methods to run the
	 *       command.)</p>
	 * @returns {int}
	 */

	result;
	/**
	 * <p>This property returns a collection of  {@link Tab}&nbsp;objects representing any new
	 *       tabs created by the command.</p>
	 * @returns {Tab[]}
	 */

	newtabs;
	/**
	 * <p>This property returns a collection of  {@link Lister}&nbsp;objects representing
	 *       any new Listers created by the command.</p>
	 * @returns {Lister[]}
	 */

	newlisters;
	/**
	 * <p>This property returns a collection of  {@link Viewer}&nbsp;objects representing
	 *       any new image viewers created by the command. (This is only for standalone
	 *       viewers, not the viewer pane.)</p>
	 * @returns {Viewer[]}
	 */

	newviewers;
} //end class
