export const myFunction = (numActivities1, mdur1,crash1, cs1, adj1, indirectCost1,currCost1, target1, rltn1, rltninv1,matr1 )=>{

    let g = numActivities1;
    let adj = adj1;
    let rltn = rltn1;
    let rltninv = rltninv1;
    let mdur = mdur1; 
    let crash = crash1;
    let cs = cs1;
    let currCost = currCost1;
    let matr=matr1;
    let indCost = indirectCost1;
    // let tar = target1;
    // let mdurr=Array(g).fill(0);
    // let css=Array(g).fill(0);
    // let crashh=Array(g).fill(0);;
    
    let maxDuration=0;
    
    let answer = 0;
    let start = 1;
    let end = target1;
    let path = [];
    let paths = [];
    let pathsinchar = [];
    
    paths = findpath( start, end, path);
    
    for (let i = 0; i < paths.length; i++) {
        let q = "";
        for (let j = 0; j < paths[i].length - 1; j++) {
            let a = paths[i][j];
            let b = paths[i][j + 1];
            let key=[a,b];
            let cc = matr[a][b];
            q += cc;
            
        }
        
        pathsinchar.push(q);
    }
    
    let finalpaths = [];
    
    for (let i = 0; i < pathsinchar.length; i++) {
        let q = pathsinchar[i];
        q = sortStringByValue(q, cs);   
        finalpaths.push(q);
    }
    
    function findpath(start, end, path) {
        
        path.push(start);
        let b=path;
        if (start === end) {
            paths.push([...path]); // Push a copy of path to allpaths
            
            return paths;
        } else {
            const k = adj[start].length;
            
            for (let i = 0; i < k; i++) {
               
                findpath(adj[start][i], end, path);
                path.pop();
            }
        }
        return paths;
    }
    
    function sortStringByValue(inputString, valueMapping) {
        let chars = inputString.split('');
    
        chars.sort((a, b) => {
            return valueMapping[a] - valueMapping[b];
        });
    
    
        return chars.join('');
    }
    let data = [];
    // 7 is the no of activitie
    solution(g);
    
    
    // Algorithm to find the solution
    function solution(noa) {
        
    
        let newCost = currCost;
        let iteration = 0;
        function cps(dur, paths, crash, cs, indCost) {
            maxDuration = Math.max(...dur);
            const ans = [];
            for (let i = 0; i < dur.length; i++) {
                if (dur[i] === maxDuration) {
                    let s = paths[i];
                    let k = "";
                    for (let j = 0; j < s.length; j++) {
                        if (crash[s[j]] > 0 && cs[s[j]] <= indCost) {
                            k += s[j];
                        }
                    }
                    ans.push(k);
                }
            }
            return ans;
        }
        let optimumCost;
        while (true) {
            
            iteration++;
            const vdur = Array(finalpaths.length).fill(0);
           
            for (let i = 0; i < finalpaths.length; i++) {
                const s = finalpaths[i];
                
                for (let j = 0; j < s.length; j++) {
                    let bb=s[j];
                    vdur[i] += mdur[bb];
                }
            }
            
            const crtpths = cps(vdur, finalpaths, crash, cs, indCost);
            const count = {};
            for (let i = 0; i < noa; i++) {
                const charCode = 'A'.charCodeAt(0) + i;
                const char = String.fromCharCode(charCode);
                if (crash[char] > 0 && cs[char] <= indCost) {
                    for (let j = 0; j < crtpths.length; j++) {
                        for (let l = 0; l < crtpths[j].length; l++) {
                            if (char.charCodeAt(0) === crtpths[j][l].charCodeAt(0)) {
                                count[char] = (count[char] || 0) + 1;
                            }
                        }
                    }
                }
            }
            
            
            function crashcpths(crtpaths, count, noa,mdur,crash,cs,indCost) {
                // Check if crash is possible or not
                for (let i = 0; i < crtpaths.length; i++) {
                    // If any critical path is empty then crashing is not possible
                    if (crtpaths[i] === "") {
                        return;
                    }
                }
            
                if (crtpaths.length === 1) {
                    // let kk=crash[crtpaths[0][0]] - 1;
                    crash[crtpaths[0][0]]--;
                    // let f=mdur[crtpaths[0][0]]-1;
                    mdur[crtpaths[0][0]]--;
                    newCost += cs[crtpaths[0][0]];
                } else if (crtpaths.length === 2) {
                    let k = '1';
                    let f = 0;
                    for (let i = 0; i < noa; i++) {
                        const charCode = 'A'.charCodeAt(0) + i;
                        const char = String.fromCharCode(charCode);
                        if (count[char] === 2) {
                            if (cs[char] < cs[k] || f === 0) {
                                f++;
                                k = char;
                            }
                        }
                    }
                    if (k === '1') {
                        if (cs[crtpaths[0][0]] + cs[crtpaths[1][0]] > indCost) {
                            return;
                        }
                        // let k2=crash[crtpaths[0][0]] - 1;
                        crash[crtpaths[0][0]]--;
                        // let f2=mdur[crtpaths[0][0]]-1;
                        mdur[crtpaths[0][0]]--;
    
                        // let k3=crash[crtpaths[1][0]] - 1;
                        crash[crtpaths[1][0]]--;
                        // let f3=mdur[crtpaths[1][0]]-1;
                        mdur[crtpaths[1][0]]--;
                        newCost += cs[crtpaths[0][0]] + cs[crtpaths[1][0]];
                    } else {
                        if (cs[k] > indCost && cs[crtpaths[0][0]] + cs[crtpaths[1][0]] > indCost) {
                            return;
                        }
                        if (cs[k] < cs[crtpaths[0][0]] + cs[crtpaths[1][0]]) {
                            // let k4=crash[k] - 1;
                            crash[k]--;
                            // let f4=mdur[k]-1;
                            mdur[k]--
                            newCost += cs[k];
                        } else {
                            // let k2=crtpaths[0][0] - 1;
                        crash[crtpaths[0][0]]--;
                        // let f2=mdur[crtpaths[0][0]]-1;
                        mdur[crtpaths[0][0]]--;
    
                    //    let k3=crash[crtpaths[1][0]] - 1;
                        crash[crtpaths[1][0]]--;
                        // let f3=mdur[crtpaths[1][0]]-1;
                        mdur[crtpaths[1][0]]--;
                            newCost += cs[crtpaths[0][0]] + cs[crtpaths[1][0]];
                        }
                    }
                }
                return;
            }
            optimumCost=currCost+maxDuration*indCost;
            data.push({maxDuration,optimumCost});
            console.log(mdur);
            crashcpths(crtpths, count, noa,mdur,crash,cs, indCost);
        
            if (newCost === currCost) {
                answer = "The optimum cost and duration of this activity are " + (currCost + maxDuration * indCost) + " and " + maxDuration;
                // console.log("The optimum cost and duration of this activity are " + (currCost + maxDuration * indCost) + " and " + maxDuration);
                break;
            } 
                
                maxDuration = maxDuration-1;
                
                currCost = newCost;
        }
    }
    return data;
};