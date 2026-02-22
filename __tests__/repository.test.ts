/**
 * @jest-environment node
 */

import {describe, expect, it} from '@jest/globals';
import { getStateData } from 'src/app/api/repo/repository';

describe('Repo tests', () => {

  it('does the repo not pull data when there is none', async () => {
    const data: string = await getStateData()
    const parsedData = JSON.parse(data)
    expect(parsedData).not.toBe("Data is not available");
  });

  it('does the repo pull data', async () => {
    const data: string = await getStateData()
    const parsedData = JSON.parse(data)
    expect(parsedData.length).toEqual(51);
  });

  it('does the repo pull all data for each row', async () => {
    const data: string = await getStateData()
    const parsedData = JSON.parse(data)
    expect(Object.keys(parsedData[0]).length).toEqual(7);
  });
})