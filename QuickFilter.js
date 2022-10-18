/**
 *This object provides information about the state of the quick filter in a tab. It's obtained from the Tab.quickfilter property.
 */
class QuickFilter {
	/**
	 * <p>Returns the current filter string, if any.</p>
	 * @returns {string}
	 */

	_default_value
	/**
	 * <p>Returns <strong>True</strong> if the auto-clear mode is set in
	 *       Preferences.</p>
	 * @returns {boolean}
	 */

	autoclear;
	/**
	 * <p>Returns <strong>True</strong> if the auto-star mode is set in
	 *       Preferences.</p>
	 * @returns {boolean}
	 */

	autostar;
	/**
	 * <p>Returns <strong>True</strong> if the filter is disabled.</p>
	 * @returns {boolean}
	 */

	disable;
	/**
	 * <p>Returns <strong>True</strong> if easy mode is selected.</p>
	 * @returns {boolean}
	 */

	easymode;
	/**
	 * <p>Returns the current filter string.</p>
	 * @returns {string}
	 */

	filter;
	/**
	 * <p>Returns <strong>True</strong> if all folders are being
	 * hidden.</p>
	 * @returns {boolean}
	 */

	hidealldirs;
	/**
	 * <p>Returns <strong>True</strong> if all files are being hidden.</p>
	 * @returns {boolean}
	 */

	hideallfiles;
	/**
	 * <p>Returns <strong>True</strong> if filtering in flatview is
	 *     enabled.</p>
	 * @returns {boolean}
	 */

	overrideflatview;
	/**
	 * <p>Returns <strong>True</strong> if partial matching is enabled.</p>
	 * @returns {boolean}
	 */

	partial;
	/**
	 * <p>Returns <strong>True</strong> if realtime filtering is
	 *   enabled.</p>
	 * @returns {boolean}
	 */

	realtime;
	/**
	 * <p>Returns <strong>True</strong> if regular expression mode is
	 *     enabled.</p>
	 * @returns {boolean}
	 */

	regex;
	/**
	 * <p>Returns <strong>True</strong> if all folders are being shown.</p>
	 * @returns {boolean}
	 */

	showalldirs;
	/**
	 * <p>Returns <strong>True</strong> if all files are being shown.</p>
	 * @returns {boolean}
	 */

	showallfiles;
	/**
	 * <p>Returns <strong>True</strong> if <a href="../Show_Everything.htm">Show
	 *       Everything</a> mode is on, which overrides (almost) all
	 *   filtering.</p>
	 * @returns {boolean}
	 */

	showeverything;
} //end class
