/**
 *This object is provided to the OnShutdown method, which is called before Opus shuts down.
 */
class ShutdownData {
	/**
	 * <p>Returns <strong>True</strong> if the Windows session is ending (that
	 *       is, if Opus is shutting down because the system is shutting down), or
	 *       <strong>False</strong> if it's just Opus that is quitting.</p>
	 * @returns {boolean}
	 */

	endsession;
	/**
	 * <p>Returns a string indicating any qualifier keys that were held down by
	 *       the user when the event was triggered.</p>
	 *       <p>The string can contain any or all of the following: <em>shift</em>
	 *       <em>ctrl</em>, <em>alt</em>, <em>lwin</em>, <em>rwin</em></p>
	 *       <p>If no qualifiers were down, the string will be:
	 *   <em>none</em></p>
	 * @returns {string}
	 */

	qualifiers;
} //end class
