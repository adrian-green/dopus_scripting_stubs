/**
 *A SmartFavorite object represents an entry for a folder in the SmartFavorites table. It is retrieved by enumerating or indexing the SmartFavorites object.
 */
class SmartFavorite {
	/**
	 * <p>Returns the path this entry represents, as a  {@link Path}&nbsp;object.</p>
	 * @returns {Path}
	 */

	path;
	/**
	 * <p>Returns the number of points this entry has as a source folder. The
	 *       point score is used by Opus to determine which folders to
	 *   display.</p>
	 * @returns {int}
	 */

	points;
	/**
	 * <p>Returns the number of points this entry has as a destination
	 *     folder.</p>
	 * @returns {int}
	 */

	destpoints;
} //end class
