/**
 *This object is provided to the OnOpenLister method, which is called when a new Lister is opened.
 */
class OpenListerData {
	/**
	 * <p>Initially this is set to <strong>False</strong>, indicating that the
	 *       event has been called before any tabs have been created. If you return
	 *       <strong>True</strong> from the <strong><a href="OnOpenLister.htm">OnOpenLister</a> </strong>event, it will be called
	 *       again and <strong>after</strong> will be set to <strong>True</strong> to
	 *       indicate all tabs have been created.</p>
	 * @returns {boolean}
	 */

	after;
	/**
	 * <p>Returns a  {@link Lister}&nbsp;object representing the
	 *       newly opened Lister.</p>
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
