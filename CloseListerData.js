/**
 *This object is provided to the OnCloseLister method, which is called before a Lister closes.
 */
class CloseListerData {
	/**
	 * <p>Returns a  {@link Lister}&nbsp;object representing the
	 *       Lister that is closing.</p>
	 * @returns {Lister}
	 */

	lister;
	/**
	 * <p>Set this to <strong>True</strong> to prevent the closing Lister from
	 *       being saved as the new default Lister.</p>
	 * @returns {boolean}
	 */

	prevent_save;
	/**
	 * <p>Returns a string indicating any qualifier keys that were held down by
	 *       the user when the event was triggered.</p>
	 *       <p>The string can contain any or all of the following: <em>shift</em>
	 *       <em>ctrl</em>, <em>alt</em>, <em>lwin</em>, <em>rwin</em></p>
	 *       <p>If no qualifiers were down, the string will be: <em>none</em></p>
	 * @returns {string}
	 */

	qualifiers;
	/**
	 * <p>Returns <strong>True</strong> if the Lister is closing because Opus is
	 *       shutting down.</p>
	 * @returns {boolean}
	 */

	shutdown;
} //end class
