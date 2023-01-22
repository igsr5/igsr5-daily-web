import styled from '@emotion/styled';
import { Avatar, Link } from '@nextui-org/react';
import { KBarToggleButton } from 'core';
import { defaultUrl } from 'core/constants';

interface Props {
  marginBottom?: string;
  hasKbarButton?: boolean;
}

const authorSectionData = {
  avatar: 'https://res.cloudinary.com/drb9hgnv3/image/upload/v1674376091/84hsaKr_agrvab.png',
  name: 'Sora Ichigo',
  blogDescription: 'This blog summarizes my daily reflections.',
};

function AuthorSection({ marginBottom = '3.5rem', hasKbarButton = false }: Props) {
  return (
    <Section style={{ marginBottom }}>
      <Div>
        <Avatar src={authorSectionData.avatar} alt={authorSectionData.name} text={authorSectionData.name} size="xl" />
        <TextWrapper>
          <H2>
            Personal blog by{' '}
            <Link href={defaultUrl} target="_blank" rel="noreferrer" color="primary">
              {authorSectionData.name}
            </Link>
            .
          </H2>
          <p>{authorSectionData.blogDescription}</p>
        </TextWrapper>
      </Div>

      {hasKbarButton && (
        <KbarButtonWrapper>
          <KBarToggleButton />
        </KbarButtonWrapper>
      )}
    </Section>
  );
}

export default AuthorSection;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.875rem;

  & > * {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const H2 = styled.h2`
  font-weight: normal;
`;

const KbarButtonWrapper = styled.div`
  width: 32px;
  flex-shrink: 0;
`;
