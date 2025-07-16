import styles from "./Reviews.module.scss";
import check_circle_icon from "/src/assets/check_circle_icon.svg";
import location_icon from "/src/assets/location_icon.svg";
import ava_review_1 from "/src/assets/ava_review_1.png";
import ava_review_2 from "/src/assets/ava_review_2.png";
import ava_review_3 from "/src/assets/ava_review_3.png";
import ava_review_4 from "/src/assets/ava_review_4.png";
import ava_review_5 from "/src/assets/ava_review_5.png";
import star from "/src/assets/star.svg";
import star_half from "/src/assets/star_half.svg";
import star_empty from "/src/assets/star_empty.svg";

const reviewsData = [
  {
    id: 1,
    name: "Sarah L",
    ava: ava_review_1,
    verified: true,
    reviewsCount: 5,
    location: "GB",
    date: "2025-11-04",
    stars: [star, star, star, star, star],
    title: "Amazing retro selection",
    description: "Fast shipping and products arrived as described. Will definitely buy again!"
  },
  {
    id: 2,
    name: "Martin G.",
    ava: ava_review_2,
    verified: true,
    reviewsCount: 2,
    location: "GB",
    date: "2025-11-04",
    stars: [star, star, star, star, star],
    title: "Top-notch service",
    description: "Excellent packaging, everything works perfectly. Nostalgia 100%!"
  },
  {
    id: 3,
    name: " Emily R.",
    ava: ava_review_3,
    verified: false,
    reviewsCount: 1,
    location: "GB",
    date: "2025-11-04",
    stars: [star, star, star, star, star_half],
    title: "Good but shipping slow",
    description: "Great product quality, but shipping took a bit longer than expected."
  },
  {
    id: 4,
    name: "Carlos M.",
    ava: ava_review_4,
    verified: true,
    reviewsCount: 4,
    location: "GB",
    date: "2025-11-04",
    stars: [star, star, star, star_half, star_empty],
    title: "Love this store",
    description: "Finally found rare accessories for my old Game Boy. Thank you!"
  },
  {
    id: 5,
    name: "Anna S",
    ava: ava_review_5,
    verified: true,
    reviewsCount: 3,
    location: "GB",
    date: "2025-11-04",
    stars: [star, star, star, star, star_empty],
    title: "Everything as described",
    description: "Received my SNES console in mint condition, works flawlessly."
  }
];

// Функция для форматирования даты в читаемый вид (например, "4 Nov 2025")
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};

const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <h3 className={styles.reviews_title}>GAMERS TRUST US</h3>
      <div className={styles.reviews_blocks}>
        {reviewsData.map((review) => (
          <article key={review.id} className={styles.reviews_block}>
            <header className={styles.reviews_block_header}>
              <img className={styles.reviews_block_ava} src={review.ava} alt={`${review.name} avatar`} />
              <div className={styles.reviews_block_content}>
                <div className={styles.reviews_block_content_top}>
                  <h4 className={styles.reviews_block_name}>{review.name}</h4>
                  {review.verified && (
                    <p className={styles.reviews_block_verfied}>
                      <img src={check_circle_icon} alt="Success icon" />Verified
                    </p>
                  )}
                </div>
                <div className={styles.reviews_block_content_bottom}>
                  <p className={styles.reviews_block_reviews}>{review.reviewsCount} reviews</p>
                  <p className={styles.reviews_block_location}>
                    <img src={location_icon} alt="Location icon" />{review.location}
                  </p>
                </div>
              </div>
            </header>
            <div className={styles.reviews_block_text}>
              <div className={styles.reviews_block_stars}>
                <div className={styles.reviews_block_star}>
                  {review.stars.map((starImg, index) => (
                    <img key={index} src={starImg} alt="Star" />
                  ))}
                </div>
                <time className={styles.reviews_block_date} dateTime={review.date}>
                  {formatDate(review.date)}
                </time>
              </div>
              <div className={styles.reviews_block_feedback}>
                <h4 className={styles.reviews_block_title}>{review.title}</h4>
                <p className={styles.reviews_block_desc}>{review.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Reviews;