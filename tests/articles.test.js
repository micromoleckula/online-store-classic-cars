import { jest } from '@jest/globals';

describe('articles.js image hover', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div class="articles__cars__list"></div>';

    global.fetch = jest.fn(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve([
        {
          title: 'Car 1',
          engine: '2.0',
          transmission: 'AT',
          drivetrain: 'RWD',
          year: '2020',
          mileage: '1000',
          price: '20000',
          images: ['img1.jpg', 'img2.jpg']
        }
      ])
    }));

    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('hovering image cycles src', async () => {
    const { articlesCars } = await import('../js/articles.js');
    await articlesCars();

    const img = document.querySelector('.article__cars__img');
    expect(img).not.toBeNull();

    expect(img.src).toContain('img1.jpg');

    img.dispatchEvent(new Event('mouseenter'));
    jest.advanceTimersByTime(1000);

    expect(img.src).toContain('img2.jpg');
  });
});
