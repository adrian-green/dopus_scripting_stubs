/**
 *This object provides metadata properties relating to audio files. It is obtained from the Metadata object.
 */
class AudioMeta {
	/**
	 * <p>Returns the value of the specified column, as listed in the <em>Music
	 *       </em>section of the <a href="../Keywords_for_Columns_Set_Command.htm">Keywords for Columns</a>
	 *       page.</p>
	 * @returns {variant}
	 */

	_column_keyword;
	/**
	 * <p>Returns a collection of  {@link AudioCoverArt}&nbsp;objects
	 *       representing any cover art imagery stored in the audio file.</p>
	 *       <p>&nbsp;</p>
	 *       <p>The default value of this property returns the number of cover art
	 *       images - for performance reasons, you should check whether this is greater
	 *       than 0 before enumerating or accessing individual items in the
	 *       collection.</p>
	 * @returns {AudioCoverArt[]}
	 */

	coverart;
} //end class
