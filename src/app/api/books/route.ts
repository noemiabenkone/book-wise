import { NextResponse } from 'next/server';

export async function GET() {
  const books = [
    {
      id: 1,
      title: 'Clean Code',
      year: 2008,
      cover: 'https://example.com/clean-code.jpg',
    },
    {
      id: 2,
      title: 'You Don’t Know JS',
      year: 2015,
      cover: 'https://example.com/ydkjs.jpg',
    },
    {
      id: 3,
      title: 'The Pragmatic Programmer',
      year: 1999,
      cover: 'https://example.com/pragmatic.jpg',
    },
    {
      id: 4,
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      year: 1994,
      cover: 'https://example.com/design-patterns.jpg',
    },
    {
      id: 5,
      title: 'JavaScript: The Good Parts',
      year: 2008,
      cover: 'https://example.com/js-good-parts.jpg',
    },
    {
      id: 6,
      title: 'Introduction to Algorithms',
      year: 2009,
      cover: 'https://example.com/algorithms.jpg',
    },
    {
      id: 7,
      title: 'Eloquent JavaScript',
      year: 2011,
      cover: 'https://example.com/eloquent-js.jpg',
    },
    {
      id: 8,
      title: 'Code Complete',
      year: 2004,
      cover: 'https://example.com/code-complete.jpg',
    },
    {
      id: 9,
      title: 'Refactoring: Improving the Design of Existing Code',
      year: 1999,
      cover: 'https://example.com/refactoring.jpg',
    },
    {
      id: 10,
      title: 'Head First Design Patterns',
      year: 2004,
      cover: 'https://example.com/head-first-design.jpg',
    },
    {
      id: 11,
      title: 'The Mythical Man-Month',
      year: 1975,
      cover: 'https://example.com/mythical-man-month.jpg',
    },
    {
      id: 12,
      title: 'Patterns of Enterprise Application Architecture',
      year: 2002,
      cover: 'https://example.com/enterprise-patterns.jpg',
    },
    {
      id: 13,
      title: 'The Art of Computer Programming',
      year: 1968,
      cover: 'https://example.com/art-computer-programming.jpg',
    },
    {
      id: 14,
      title: 'Grokking Algorithms',
      year: 2016,
      cover: 'https://example.com/grokking-algorithms.jpg',
    },
    {
      id: 15,
      title: 'Cracking the Coding Interview',
      year: 2015,
      cover: 'https://example.com/cracking-coding.jpg',
    },
    {
      id: 16,
      title: 'Effective Java',
      year: 2008,
      cover: 'https://example.com/effective-java.jpg',
    },
    {
      id: 17,
      title: 'Deep Learning',
      year: 2016,
      cover: 'https://example.com/deep-learning.jpg',
    },
    {
      id: 18,
      title: 'Computer Networking: A Top-Down Approach',
      year: 2017,
      cover: 'https://example.com/computer-networking.jpg',
    },
    {
      id: 19,
      title: 'The C Programming Language',
      year: 1978,
      cover: 'https://example.com/c-programming.jpg',
    },
    {
      id: 20,
      title: 'Python Crash Course',
      year: 2015,
      cover: 'https://example.com/python-crash-course.jpg',
    },
  ];
  return NextResponse.json(books);
}
