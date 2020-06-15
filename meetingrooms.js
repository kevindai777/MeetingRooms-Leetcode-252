//Objective is to see whether the meeting times, given a 2-D array, are valid
//and do not overlap.

let intervals = [[0,30],[5,10],[15,20]]


//O(nlogn) solution that sorts the intervals based on starting time first
//then sees whether an ending time overlaps over the next starting time.

intervals.sort((a,b) => {
    return a[0] - b[0]
})

for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] > intervals[i + 1][0]) {
        return false
    }
}

return true