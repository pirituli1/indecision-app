// sum.test.js
import { expect, test } from 'vitest'
import { addArray, sum } from '@/helpers/sum'
//color
import pc from 'picocolors';
import { describe } from 'node:test';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})



describe('AddArray function test', () => {

    test('number in array is sum correctly', () => {
        // Preparación
        const array = [1,5,2,5,7,8];
    
        // Estimulo
        const result = array.reduce((acc, curr) =>acc + curr, 0);
        // console.log(pc.bgCyan(`El resultado es `),pc.bgBlue(result));
        // El comportamiento esperado 
        try {
            expect(result).toBe(array.reduce((acc, curr) =>acc + curr, 0));      
        } catch (e) {
            throw pc.white(`The function can't do the sum correctly ${ e }`)
        }
    });
    

    test( 'Can use with decimal num', () => {
        // Preparación
        const array = [1.1,22,3,0.1,1];
        // Estimulo
        const result = addArray(array);
        // El comportamiento esperado
        try {
            expect(result).toBe(array.reduce((acc,curr) => acc + curr, 0))
        } catch (error) {
            throw pc.red(`this function can't be use with decimal number ${error}`)
        }
    });
    
    test( 'Can be use with negative numbers', () => {
    
        const array = [1,1,1,-'1'];
        
        const result = addArray( array );
    
        try {
            expect( result ).toBe( 2 );
        } catch ( e ) {
            throw pc.red(`It can't be use with negative number ${e}`)
        }
    })
    
})