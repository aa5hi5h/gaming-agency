import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
  email: string;
  website: string;
  interests: string[];
  projectCategory: string;
  productStage: string;
  message: string;
  budget: string;
}

export const ContactFormEmail = ({
  email,
  website,
  interests,
  projectCategory,
  productStage,
  message,
  budget,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {email}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>🎮 New Contact Form Submission</Heading>
          
          <Section style={section}>
            <Heading as="h2" style={h2}>Contact Information</Heading>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={text}>
              <strong>Website:</strong> {website || 'Not provided'}
            </Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading as="h2" style={h2}>Project Details</Heading>
            <Text style={text}>
              <strong>Category:</strong> {projectCategory}
            </Text>
            <Text style={text}>
              <strong>Product Stage:</strong> {productStage}
            </Text>
            <Text style={text}>
              <strong>Budget:</strong> {budget || 'Not specified'}
            </Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading as="h2" style={h2}>Interests</Heading>
            <div style={interestsContainer}>
              {interests.length > 0 ? (
                interests.map((interest, index) => (
                  <span key={index} style={interestBadge}>
                    {interest}
                  </span>
                ))
              ) : (
                <Text style={text}>No interests selected</Text>
              )}
            </div>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading as="h2" style={h2}>Message</Heading>
            <Text style={messageText}>
              {message || 'No message provided'}
            </Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            Submitted on {new Date().toLocaleString('en-US', { 
              dateStyle: 'full', 
              timeStyle: 'short' 
            })}
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactFormEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
};

const section = {
  padding: '0 48px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0 48px',
};

const h2 = {
  color: '#a855f7',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '16px 0',
};

const text = {
  color: '#333',
  fontSize: '14px',
  lineHeight: '24px',
  margin: '8px 0',
};

const messageText = {
  color: '#333',
  fontSize: '14px',
  lineHeight: '24px',
  whiteSpace: 'pre-wrap' as const,
  backgroundColor: '#f6f9fc',
  padding: '16px',
  borderRadius: '4px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 48px',
};

const interestsContainer = {
  display: 'flex',
  flexWrap: 'wrap' as const,
  gap: '8px',
  marginTop: '12px',
};

const interestBadge = {
  display: 'inline-block',
  backgroundColor: '#a855f7',
  color: '#ffffff',
  padding: '6px 12px',
  borderRadius: '4px',
  fontSize: '12px',
  fontWeight: '600',
  marginRight: '8px',
  marginBottom: '8px',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  padding: '0 48px',
  marginTop: '20px',
};