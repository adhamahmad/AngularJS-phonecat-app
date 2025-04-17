angular.module('phoneDetail').component(
    'phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['Phone', '$stateParams',
        function PhoneDetailsController(Phone, $stateParams) {
            var self = this;

            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
            };

            self.onDblClick = function onDblClick() {
                alert('Double Clicked');
            };

            self.phone = Phone.get({ phoneId: $stateParams.phoneId }, function () {
                self.setImage(self.phone.images[0]);
            });
        }
    ]
}
)
