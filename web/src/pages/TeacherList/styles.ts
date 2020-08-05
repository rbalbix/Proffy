import styled from 'styled-components';

export const PageTeacherList = styled.div`
  #page-teacher-list {
    width: 100vw;
    height: 100vh;
  }

  #search-teachers {
    margin-top: 3.2rem;

    label {
      color: var(--color-text-in-primary);
    }

    button {
      width: 100%;
      height: 5.6rem;
      background: var(--color-secundary);
      color: var(--color-button-text);
      border: 0;
      border-radius: 0.8rem;
      font: 700 1.6rem Archivo;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: background-color 0.2s;
      margin-top: 4.6rem;

      &:hover {
        background: var(--color-secundary-dark);
      }
    }
  }

  main {
    margin: 3.2rem auto;
    width: 90%;
  }

  @media (min-width: 700px) {
    #page-teacher-list {
      max-width: 100vw;
    }

    #search-teachers {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 1.6rem;
      position: absolute;
      bottom: -2.8rem;

      .input-block {
        + .input-block {
          margin-top: 0;
        }
      }
    }

    main {
      padding: 3.2rem 0;
      max-width: 74rem;
      margin: 0 auto;
    }
  }
`;
