/**
 * @jest-environment node
 */

import {describe, expect, it} from '@jest/globals';
import { NextRequest } from 'next/server';
import { GET } from 'src/app/api/state_data/route';

describe('State Data API Tests', () => {

  it('does the repo not pull data when there is none', async () => {
    const res: Response = await GET(new NextRequest("https://www.teststring.com"))
    const parsedData = JSON.parse(await res.text())
    
    expect(parsedData).not.toBe("Data is not available");
  });

  it('does the repo pull data', async () => {
    const res: Response = await GET(new NextRequest("https://www.teststring.com"))
    const parsedData = JSON.parse(await res.text())
    expect(parsedData.length).toEqual(51);
  });

  it('does the repo pull all data for each row', async () => {
    const res: Response = await GET(new NextRequest("https://www.teststring.com"))
    const parsedData = JSON.parse(await res.text())
    expect(Object.keys(parsedData[0]).length).toEqual(7);
  });
})