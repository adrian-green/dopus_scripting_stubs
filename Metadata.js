/**
 *This object represents a file or folder's metadata. It can be obtained from the Item.metadata property, as well as the FSUtil.GetMetadata method.
 */
class Metadata {
	/**
	 * <p>Returns a string indicating the primary type of metadata available in
	 *       this object. The string will be one of the following: <em>none</em>,
	 *       <em>video</em>, <em>audio</em>, <em>image</em>, <em>font</em>,
	 *       <em>exe</em>, <em>doc</em>, <em>other</em>. <br>&nbsp;</p>
	 *       <p>Note that sometimes more than one type of metadata will be available.
	 *       For example, author is a document field (and so found under the
	 *       <strong>doc</strong> property), but pictures can have authors as well. In
	 *       this instance, the <strong>Metadata</strong> object would provide both
	 *       <strong>ImageMeta</strong> and <strong>DocMeta</strong> objects.</p>
	 *       <p>&nbsp;</p>
	 *       <p>If the returned string is <em>none</em> it means that no metadata is
	 *       available for the file, and you should not attempt to access any of the
	 *       other properties.</p>
	 * @returns {string}
	 */

	_default_value
	/**
	 * <p>Returns an  {@link AudioMeta}&nbsp;object providing
	 *       access to audio metadata. The properties of this object are
	 *       generally&nbsp;returned as their appropriate underlying type (e.g. a
	 *       numeric field like "track number" will be returned as an
	 *     <em>int</em>).</p>
	 * @returns {AudioMeta}
	 */

	audio;
	/**
	 * <p>Returns an&nbsp; {@link AudioMeta}&nbsp;object that
	 *       provides access to the unmodified text form of the audio metadata. This
	 *       provides access to the same text as displayed in a Lister. For example, a
	 *       numeric field like "track number" would be returned as a <em>string</em>
	 *       rather than an <em>int</em>.</p>
	 * @returns {AudioMeta}
	 */

	audio_text;
	/**
	 * <p>Returns a  <!--?xml:namespace prefix = "c1" /-->{@link DocMeta}&nbsp;object providing
	 *       access to document metadata.</p>
	 * @returns {DocMeta}
	 */

	doc;
	/**
	 * <p>Returns a  <!--?xml:namespace prefix = "c1" /-->{@link DocMeta}&nbsp;object that provides
	 *       access to the unmodified text form of the document metadata.</p>
	 * @returns {DocMeta}
	 */

	doc_text;
	/**
	 * <p>Returns an  <!--?xml:namespace prefix = "c1" /-->{@link ExeMeta}&nbsp;object providing
	 *       access to executable (program) metadata.</p>
	 * @returns {ExeMeta}
	 */

	exe;
	/**
	 * <p>Returns an  <!--?xml:namespace prefix = "c1" /-->{@link ExeMeta}&nbsp;object that provides
	 *       access to the unmodified text form of the program metadata.</p>
	 * @returns {ExeMeta}
	 */

	exe_text;
	/**
	 * <p>Returns a  {@link FontMeta}&nbsp;object providing
	 *       access to font file metadata.</p>
	 * @returns {FontMeta}
	 */

	font;
	/**
	 * <p>Returns an  {@link ImageMeta}&nbsp;object providing
	 *       access to picture metadata.</p>
	 * @returns {ImageMeta}
	 */

	image;
	/**
	 * <p>Returns an  {@link ImageMeta}&nbsp;object that
	 *       provides access to the unmodified text form of the picture
	 *   metadata.</p>
	 * @returns {ImageMeta}
	 */

	image_text;
	/**
	 * <p>Returns an  {@link OtherMeta}&nbsp;object that
	 *       provides access to miscellaneous metadata.</p>
	 * @returns {OtherMeta}
	 */

	other;
	/**
	 * <p>Returns a collection of <em>strings</em> corresponding to the tags that
	 *       are assigned to this item.</p>
	 * @returns {string[]}
	 */

	tags;
	/**
	 * <p>Returns a  <!--?xml:namespace prefix = "c1" /-->{@link VideoMeta}object providing
	 *       access to video metadata.</p>
	 * @returns {VideoMeta}
	 */

	video;
	/**
	 * <p>Returns a  <!--?xml:namespace prefix = "c1" /-->{@link VideoMeta}object that provides
	 *       access to the unmodified text form of the video
	 * metadata.</p>
	 * @returns {VideoMeta}
	 */

	video_text;
} //end class
