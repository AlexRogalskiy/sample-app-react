import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { ProductStatus } from '../taxonomies/product_status';
import { Sitemap } from '../taxonomies/sitemap_538125f';

/**
 * Generated by '@kontent-ai/model-generator@5.2.0'
 *
 * Accessory
 * Id: d9748663-f567-4c51-a922-c24a1d6b935a
 * Codename: accessory
 */
export type Accessory = IContentItem<{
  /**
   * Product name (text)
   * Required: false
   * Id: f9e2672c-5035-412e-3985-d6112b3781bd
   * Codename: product_name
   *
   * Include a product display name.
   */
  productName: Elements.TextElement;

  /**
   * Price (number)
   * Required: false
   * Id: 51d63ac3-d40d-15ea-c219-be207714077c
   * Codename: price
   *
   * Include a product price.
   */
  price: Elements.NumberElement;

  /**
   * Image (asset)
   * Required: false
   * Id: f0db12e6-86e4-8597-903b-c5984076d6b3
   * Codename: image
   *
   * Upload one product image; the recommended size is 300 × 300 px.
   */
  image: Elements.AssetsElement;

  /**
   * Manufacturer (text)
   * Required: false
   * Id: ab75ff46-b629-5ce5-aac9-79ed8a7b869c
   * Codename: manufacturer
   *
   * Include a manufacturer's name.
   */
  manufacturer: Elements.TextElement;

  /**
   * Product status (taxonomy)
   * Required: false
   * Id: ef13b1f4-b558-f707-35a4-86146dbe4518
   * Codename: product_status
   *
   * Add a product status if the product is included in a special offering.
   */
  productStatus: Elements.TaxonomyElement<ProductStatus>;

  /**
   * Short description (rich_text)
   * Required: false
   * Id: 9740e2d0-87e8-52f5-ff4c-566fa00b1253
   * Codename: short_description
   *
   * Include a short description that fits within 160 characters.
   */
  shortDescription: Elements.RichTextElement;

  /**
   * Long description (rich_text)
   * Required: false
   * Id: 1f961774-a589-4e21-9f8e-a8c4908ea476
   * Codename: long_description
   *
   * Include a full product description.
   */
  longDescription: Elements.RichTextElement;

  /**
   * URL pattern (url_slug)
   * Required: false
   * Id: 69e4af48-f1ac-1146-e6c9-d20d55ca5792
   * Codename: url_pattern
   *
   * Provide a SEO-friendly URL.
   */
  urlPattern: Elements.UrlSlugElement;

  /**
   * Sitemap (taxonomy)
   * Required: false
   * Id: d8ed1597-930c-4cf8-a34e-c5d5e82718ed
   * Codename: sitemap
   */
  sitemap: Elements.TaxonomyElement<Sitemap>;

  /**
   * Meta title (text)
   * Required: false
   * Id: 09398b24-61ed-512e-5b5c-affd54a098e5
   * Codename: metadata__meta_title
   * From snippet: Metadata
   * Snippet codename: metadata
   *
   * Length: 30–60 characters
   */
  metadataMetaTitle: Elements.TextElement;

  /**
   * Meta description (text)
   * Required: false
   * Id: 2e555cc1-1eae-520c-189e-28548904f529
   * Codename: metadata__meta_description
   * From snippet: Metadata
   * Snippet codename: metadata
   *
   * Length: 70–150 characters
   */
  metadataMetaDescription: Elements.TextElement;

  /**
   * og:title (text)
   * Required: false
   * Id: 1db86c7a-e836-3c4e-01e6-4f704ad38ba5
   * Codename: metadata__og_title
   * From snippet: Metadata
   * Snippet codename: metadata
   *
   * Max. 60 characters
   */
  metadataOgTitle: Elements.TextElement;

  /**
   * og:description (text)
   * Required: false
   * Id: 05987dc9-ebe3-7b61-b949-522eb42dbc0d
   * Codename: metadata__og_description
   * From snippet: Metadata
   * Snippet codename: metadata
   *
   * Max. 150 characters
   */
  metadataOgDescription: Elements.TextElement;

  /**
   * og:image (asset)
   * Required: false
   * Id: ce6cda71-9d38-1d57-3ac3-ec9b2e286edd
   * Codename: metadata__og_image
   * From snippet: Metadata
   * Snippet codename: metadata
   *
   * Use images that are at least 1200 × 630 px for best display on high resolution devices. At the minimum, you should use images that are 600 × 315 px to display link page posts with larger images. Images may be up to 1 MB in size.
   */
  metadataOgImage: Elements.AssetsElement;

  /**
   * twitter:site (text)
   * Required: false
   * Id: 34213fdf-0015-8f4f-e5e6-83c6842cff4a
   * Codename: metadata__twitter_site
   * From snippet: Metadata
   * Snippet codename: metadata
   */
  metadataTwitterSite: Elements.TextElement;

  /**
   * twitter:creator (text)
   * Required: false
   * Id: 68f65095-c9b4-05d6-a473-2883c2f0c7af
   * Codename: metadata__twitter_creator
   * From snippet: Metadata
   * Snippet codename: metadata
   */
  metadataTwitterCreator: Elements.TextElement;

  /**
   * twitter:title (text)
   * Required: false
   * Id: b208d3dc-bd8d-b1af-5ef0-747650730ba7
   * Codename: metadata__twitter_title
   * From snippet: Metadata
   * Snippet codename: metadata
   *
   * Max. 60 characters
   */
  metadataTwitterTitle: Elements.TextElement;

  /**
   * twitter:description (text)
   * Required: false
   * Id: b7d1dd8b-a5d8-2ad8-2f57-49881363f6f7
   * Codename: metadata__twitter_description
   * From snippet: Metadata
   * Snippet codename: metadata
   *
   * A description that concisely summarizes the content as appropriate for presentation within a Tweet. You should not re-use the title as the description, or use this field to describe the general services provided by the website. Max. 150 characters.
   */
  metadataTwitterDescription: Elements.TextElement;

  /**
   * twitter:image (asset)
   * Required: false
   * Id: 63793ba4-6004-a93c-68ca-52a1f0482bca
   * Codename: metadata__twitter_image
   * From snippet: Metadata
   * Snippet codename: metadata
   *
   * Twitter's recommendation: A URL to a unique image representing the content of the page. You should not use a generic image such as your website logo, author photo, or other image that spans multiple pages. Images for this Card should be at least 280 × 150 px. Images may be up to 1 MB in size.Let's go for 560 × 300 px.
   */
  metadataTwitterImage: Elements.AssetsElement;
}>;