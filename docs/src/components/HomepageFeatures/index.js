import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1>소개</h1>
        <div>
          <p>참고 및 쉽게 쓰고자 만든 TypeScript/JavaScript 패키지</p>
          <p>자주 사용하고 유용하다고 판단되 컴포넌트를 작성</p>
          <p>yarn berry, rollup을 사용한 모노레포로 구현</p>
        </div>
        <div style={{ height: '24px' }} />
        <h3>추천 라이브러리</h3>
        <ul>
          <li>
            <Link href="www.github.com">@junhokims/react</Link> React에서
            사용하고자 하는 컴포넌트, Hook, 유틸리티 함수 제공
          </li>
          <li>
            <Link href="www.github.com">@junhokims/utils</Link> 브라우저, Node
            환경에서 사용 가능한 유틸리티 함수 제공
          </li>
          <li>
            <Link href="www.github.com">@junhokims/date</Link> dayjs 기반으로 한
            Date 타입 Input, Output 유틸리티 함수 제공
          </li>
        </ul>
      </div>
    </section>
  );
}

function Link(props) {
  return (
    <a
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}
