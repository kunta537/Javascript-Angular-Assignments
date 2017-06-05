angular.module('studentApp').directive('studentList', function() {
	return {
        templateUrl: 'student_list.html',
		replace: true,
		scope: {
			students: '='
        }
    };
});