import notFoundPoster from 'assets/notfound.jpg';
import notFoundVideo from 'assets/rick_roll.mp4';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Heading } from 'components/Heading';
import { Meta } from 'components/Meta';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment } from 'react';
import styles from './404.module.css';

export function Page404() {
  return (
    <section className={styles.page}>
      <Meta
        title="404 Not Found"
        description="404 page not found. This page doesn't exist"
      />
      <Transition in>
        {visible => (
          <Fragment>
            <div className={styles.details}>
              <div className={styles.text}>
                <Heading
                  className={styles.title}
                  data-visible={visible}
                  level={0}
                  weight="bold"
                >
                  404
                </Heading>
                <Heading
                  aria-hidden
                  className={styles.subheading}
                  data-visible={visible}
                  as="h2"
                  level={3}
                >
                  <DecoderText text="Error: Redacted" start={visible} delay={300} />
                </Heading>
                <Text className={styles.description} data-visible={visible} as="p">
                  This page could not be found. It either doesn’t exist or was deleted. Or
                  perhaps you don’t exist.
                </Text>
                <Button
                  secondary
                  iconHoverShift
                  className={styles.button}
                  data-visible={visible}
                  href="/"
                  icon="chevronRight"
                >
                  Back to homepage
                </Button>
              </div>
            </div>

            <div className={styles.videoContainer} data-visible={visible}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.video}
                data-visible={visible}
              >
                <source src={notFoundVideo} type="video/mp4" />
              </video>
            </div>
          </Fragment>
        )}
      </Transition>
    </section>
  );
}
