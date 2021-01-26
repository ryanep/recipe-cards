import * as styled from './styles';
import { MeasurementUnitInputProps } from './types';

export const MeasurementUnitInput = ({
  selectedUnit,
  onUnitChange,
}: MeasurementUnitInputProps) => {
  return (
    <styled.Container>
      <styled.Label htmlFor="measurement-metric">
        <styled.Input
          type="radio"
          id="measurement-metric"
          name="measurement"
          checked={selectedUnit === 'metric'}
          onChange={() => onUnitChange('metric')}
        />
        <styled.Name>Metric</styled.Name>
      </styled.Label>

      <styled.Label htmlFor="measurement-imperial">
        <styled.Input
          type="radio"
          id="measurement-imperial"
          name="measurement"
          checked={selectedUnit === 'imperial'}
          onChange={() => onUnitChange('imperial')}
        />
        <styled.Name>Imperial</styled.Name>
      </styled.Label>
    </styled.Container>
  );
};
