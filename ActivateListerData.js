/**
 *This object is provided to the OnActivateLister method, which is called whenever a Lister window is activated or deactivated.
 */
class ActivateListerData {
	/**
	 * <p>Returns <strong>True</strong> if this Lister is activating,
	 *       <strong>False</strong> if deactivating. Note that if the activation moves
	 *       from one Lister straight to another the script will be called
	 *   twice.</p>
	 * @returns {boolean}
	 */

	active;
	/**
	 * <p>Returns a  {@link Lister}&nbsp;object representing the
	 *       Lister that is closing.</p>
	 * @returns {Lister}
	 */

	lister;
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
