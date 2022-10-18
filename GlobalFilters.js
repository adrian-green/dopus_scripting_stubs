/**
 *This object lets you access information about the global filter settings (configured on the Folders / Global Filters page in Preferences).
 */
class GlobalFilters {
	/**
	 * <p>Returns <strong>True</strong> if the global wildcard filters are
	 *       enabled.</p>
	 * @returns {boolean}
	 */

	enable;
	/**
	 * <p>Returns the global filename filter wildcard pattern. If the wildcard is
	 *       configured to use regular expressions, it will have a
	 *       <strong>regex:</strong> prefix in front of the pattern.</p>
	 * @returns {string}
	 */

	file;
	/**
	 * <p>Returns the global&nbsp;folder filter wildcard pattern. If the wildcard
	 *       is configured to use regular expressions, it will have a
	 *       <strong>regex:</strong> prefix in front of the pattern.</p>
	 * @returns {string}
	 */

	folder;
	/**
	 * <p>Returns <strong>True</strong> if the global option to hide hidden files
	 *       is on.</p>
	 * @returns {boolean}
	 */

	hidehidden;
	/**
	 * <p>Returns <strong>True</strong> if the global option to hide operating
	 *       system files is on.</p>
	 * @returns {boolean}
	 */

	hidesystem;
} //end class
