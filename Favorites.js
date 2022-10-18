/**
 *The Favorites object holds a collection of all the defined favorite folders. It is retrieved from the DOpus.favorites method.
 */
class Favorites {
	/**
	 * <p>You can enumerate the <strong>Favorites </strong>object to retrieve
	 *       individual {@link Favorite}
	 *       objects.</p>
	 * @returns {Favorite[]}
	 */

	_default_value;

	/**
	 * <p>Adds a new favorite folder to the favorites list. Note that changes you
	 *       make to the list are not saved until you call the <strong>Save</strong>
	 *       method.</p>
	 *       <p>&nbsp;</p>
	 *       <p>This method performs three separate functions; it can add a separator,
	 *       a sub-folder or a favorite folder.&nbsp;</p>
	 *       <ul>
	 *         <li>To add a separator, the parameters should be the type string
	 *         <strong>sep</strong>, optionally followed by the insertion position (see
	 *         below).<br><br>For example,
	 *         <strong>Favorites.Add("sep")</strong>;<br>&nbsp;
	 *         </li><li>To add a folder, the first parameter should be the string
	 *         <strong>folder:</strong> followed by the name of the folder (as a single
	 *         parameter), optionally followed by the insertion position.<br><br>For
	 *         example, <strong>Favorites.Add("folder:Picture
	 *         Locations")</strong>;<br>&nbsp;
	 *         </li><li>To add a new favorite, the first parameter can optionally be the
	 *         name of the favorite, and the second parameter can be the&nbsp;path of
	 *         the folder to add, or the name can be omitted and only the path&nbsp;can
	 *         be provided. In either case you can optionally include&nbsp;the
	 *         insertion position as the last parameter.<br><br>For example,
	 *         <strong>Favorites.Add("myfave", "c:\folder\path");</strong><br>or
	 *         <strong>Favorites.Add("c:\folder\path");&nbsp;</strong> </li></ul>
	 *       <p>In all three cases the new item is added to the end by default, but you
	 *       can optionally specify a position to insert the item somewhere else. E.g.
	 *       specifying <strong>0</strong> for the insertion position would add it at
	 *       the top of the list. You can provide either a number or another {@link Favorite}object.</p>
	 *       <p><br>For example, <strong>Favorites.Add("myfave", "c:\folder\path",
	 *       0);</strong></p>
	 *       <p><strong></strong>&nbsp;</p>
	 *       <p>The return value is either a <a href="Favorite.htm"><strong>Favorite
	 *       </strong></a>or a <strong>Favorites </strong>object (depending on whether
	 *       you added a sub-folder or a favorite folder).&nbsp;</p>
	 * @param {string|Favorite} typeOrNameorFavorite
	 * @param {string} path
	 * @param {int} insertpos
	 * @returns {Favorite|Favorites}
	 */
	Add(typeOrNameorFavorite, path, insertpos) {
	}

	/**
	 * <p>Deletes the specified favorite or sub-folder. Note that changes you
	 *       make to the list are not saved until you call the <strong>Save</strong>
	 *       method.</p>
	 * @param {object} Favorite
	 * @param {
	or} or
	 * @param {object} Favorites
	 *
	 */
	Delete(Favorite, or, Favorites) {
	}

	/**
	 * <p>Lets you locate a sub-folder one or more levels below the current one.
	 *       The <strong>name </strong>parameter is the name or path and name of the
	 *       sub-folder to look for (e.g. "myfave", "pictures/local", etc).<br><br>The
	 *       optional <strong>index </strong>parameter lets you handle the case when
	 *       there might be more than one sub-folder with the same name.
	 *       <strong>Favorites.Find("pictures", 1);</strong> would find the second
	 *       sub-folder called "pictures" below the current level.</p>
	 * @param {string} name
	 * @param {int} index
	 * @returns {Favorites}
	 */
	Find(name, index) {
	}

	/**
	 * <p>Saves any changes you've made to the favorites list. Once you call this
	 *       method changes you have made will be reflected in Preferences and the
	 *       favorites list in Listers. Note that you can only call this method on the
	 *       main "root" <strong>Favorites </strong>object obtained from the <strong><!--?xml:namespace prefix = "c1" /--><a href="DOpus.htm">DOpus</a>.favorites </strong>property</p>
	 *
	 */
	Save() {
	}

	/**
	 * <p>Changes the name of this sub-folder. Note that changes you make to the
	 *       list are not saved until you call the <strong>Save</strong> method. You
	 *       can only call this method on <strong>Favorites</strong> objects that refer
	 *       to sub-folders, and not the main "root" folder.</p>
	 * @param {string} name
	 *
	 */
	SetName(name) {
	}
} //end class
