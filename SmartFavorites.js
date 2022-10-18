/**
 *The SmartFavorites object lets you query the contents of the SmartFavorites table. It is retrieved from the DOpus.smartfavorites property.
 */
class SmartFavorites {
	/**
	 * <p>You can enumerate the <strong>SmartFavorites </strong>object to
	 *       retrieve individual {@link SmartFavorite}
	 *   objects.</p>
	 * @returns {SmartFavorite[]}
	 */

	_default_value
	/**
	 * <p>Returns the number of points an entry must have before it would be
	 *       displayed in the  <a href="../SmartFavorites.htm">SmartFavorites</a> list.</p>
	 * @returns {int}
	 */

	threshhold;
	/**
	 * <p>Returns the maximum number of entries that would be displayed in the  <a href="../SmartFavorites.htm">SmartFavorites</a>
	 * list.</p>
	 * @returns {int}
	 */

	max;
} //end class
