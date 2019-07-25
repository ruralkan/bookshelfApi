import {expect} from 'chai';
import server from '../bin/server'


const addr = server.address()
const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`
console.log(bind);


describe('Our first test', () => {
    it('Should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('server working', () => {
    it('should exist', ()=> {
        expect(server).to.not.be.an('undefined');
        //expect(server).toBeDefined();
      });
    it('should be an object', ()=>{
        expect(server).to.be.an('object');
        //expect(typeof server).toBe('object');
      });
    it('tests that server is running current port', ()=>{
        expect(bind).to.equal('port 3000')
    });
});

